import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  Activity, BookOpen, CheckCircle2, Clipboard, Download, ExternalLink,
  Cpu, Layers, RefreshCw, Server, ShieldCheck, AlertTriangle, Database, Search
} from 'lucide-react';

const DEFAULT_BACKEND_URL = 'http://127.0.0.1:8000';

const INITIAL_SNAPSHOTS = [
  {
    id: 1,
    stack_name: 'prod',
    urn: 'urn:pulumi:prod::homelab::proxmoxve:index/vmLegacy:VmLegacy::server-prod-101',
    resource_type: 'proxmoxve:index/vmLegacy:VmLegacy',
    vm_id: 7000, memory_mb: 6144, cores: 4,
    reboot_after_update: 1, ignore_disk_speed: 1,
    secret_provider: 'infisical-sdk',
    state_json: '{"node":"prx-1","template":"packer-ubuntu-2404-lts","vlan":20,"bridge":"vmbr1","storage":"ceph-pool","protect":true}',
    created_at: '2026-11-10T14:22:00Z'
  }
];

export default function App() {
  const mountRef = useRef(null);
  const [backendUrl, setBackendUrl] = useState(() => localStorage.getItem('pulumi_backend_url') || DEFAULT_BACKEND_URL);
  const [customUrlInput, setCustomUrlInput] = useState(backendUrl);
  const [backendConnected, setBackendConnected] = useState(false);
  const [probing, setProbing] = useState(true);
  const [backendMeta, setBackendMeta] = useState(null);
  const [activeTab, setActiveTab] = useState('topology');
  const [snapshots, setSnapshots] = useState(() => {
    const saved = localStorage.getItem('pulumi_homelab_snapshots');
    return saved ? JSON.parse(saved) : INITIAL_SNAPSHOTS;
  });
  const [stackName, setStackName] = useState('dev');
  const [vmId, setVmId] = useState(7001);
  const [vmMemory, setVmMemory] = useState(8192);
  const [rebootAfterUpdate, setRebootAfterUpdate] = useState(true);
  const [ignoreDiskSpeed, setIgnoreDiskSpeed] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const isHttps = window.location.protocol === 'https:';

  const probeBackend = useCallback(async (targetUrl) => {
    const url = targetUrl || backendUrl;
    setProbing(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    try {
      const res = await fetch(`${url}/api/health`, { signal: controller.signal, headers: { Accept: 'application/json' } });
      clearTimeout(timeout);
      if (res.ok) {
        const data = await res.json();
        setBackendConnected(true);
        setBackendMeta(data);
        const listRes = await fetch(`${url}/api/snapshots?limit=25`);
        if (listRes.ok) setSnapshots(await listRes.json());
      } else {
        setBackendConnected(false); setBackendMeta(null);
      }
    } catch {
      clearTimeout(timeout); setBackendConnected(false); setBackendMeta(null);
    } finally { setProbing(false); }
  }, [backendUrl]);

  useEffect(() => { probeBackend(backendUrl); }, [backendUrl, probeBackend]);

  useEffect(() => {
    if (!backendConnected) localStorage.setItem('pulumi_homelab_snapshots', JSON.stringify(snapshots));
  }, [snapshots, backendConnected]);

  const handleSaveBackendUrl = (e) => {
    e.preventDefault();
    localStorage.setItem('pulumi_backend_url', customUrlInput);
    setBackendUrl(customUrlInput);
    probeBackend(customUrlInput);
  };

  const handleCommitSnapshot = async (e) => {
    e.preventDefault();
    const urn = `urn:pulumi:${stackName}::homelab::proxmoxve:index/vmLegacy:VmLegacy::server-${stackName}-${vmId}`;
    const statePayload = { vm_id: Number(vmId), memory_mb: Number(vmMemory), cores: Number(vmCores), reboot_after_update: rebootAfterUpdate, ignore_changes: ignoreDiskSpeed ? ['disks[0].speed'] : [] };

    if (backendConnected) {
      try {
        const res = await fetch(`${backendUrl}/api/snapshots`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ stack_name: stackName, vm_id: Number(vmId), memory_mb: Number(vmMemory), cores: Number(vmCores), reboot_after_update: rebootAfterUpdate, ignore_disk_speed: ignoreDiskSpeed, notes: `Simulated ${stackName} update` })
        });
        if (res.ok) { probeBackend(backendUrl); return; }
      } catch {}
    }

    setSnapshots(prev => [{ id: Date.now(), stack_name: stackName, urn, resource_type: 'proxmoxve:index/vmLegacy:VmLegacy', vm_id: Number(vmId), memory_mb: Number(vmMemory), cores: Number(vmCores), reboot_after_update: rebootAfterUpdate ? 1 : 0, ignore_disk_speed: ignoreDiskSpeed ? 1 : 0, secret_provider: 'infisical-sdk', state_json: JSON.stringify(statePayload), created_at: new Date().toISOString() }, ...prev]);
  };

  const handleHybridSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (backendConnected) {
      try {
        const res = await fetch(`${backendUrl}/api/search?q=${encodeURIComponent(searchQuery.trim())}`);
        if (res.ok) { setSearchResults(await res.json()); return; }
      } catch {}
    }
    const lower = searchQuery.toLowerCase();
    const filtered = snapshots.filter(s => s.urn.toLowerCase().includes(lower) || s.state_json.toLowerCase().includes(lower) || s.stack_name.toLowerCase().includes(lower));
    setSearchResults({ query: searchQuery, mode: 'local', vector_matches: filtered.map(f => ({ snapshot_id: f.id, distance: 0.12, stack_name: f.stack_name, urn: f.urn, vm_id: f.vm_id, memory_mb: f.memory_mb })), lexical_fts5_matches: filtered });
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);
    scene.fog = new THREE.FogExp2(0x020617, 0.028);
    const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 5.5, 13.5);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const keyLight = new THREE.PointLight(0x38bdf8, 2.4, 60);
    keyLight.position.set(6, 10, 8);
    scene.add(keyLight);

    const rig = new THREE.Group();
    const proxmoxMesh = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2.0, 2.2), new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.25, metalness: 0.75 }));
    proxmoxMesh.position.set(-4.8, 0, 0);
    rig.add(proxmoxMesh);

    const sqliteMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 2.2, 32), new THREE.MeshStandardMaterial({ color: backendConnected ? 0x10b981 : 0xf59e0b, roughness: 0.2, metalness: 0.6 }));
    rig.add(sqliteMesh);

    const pulumiMesh = new THREE.Mesh(new THREE.OctahedronGeometry(1.5, 0), new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.3, metalness: 0.65 }));
    pulumiMesh.position.set(4.8, 0, 0);
    rig.add(pulumiMesh);

    rig.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-4.8, 0, 0), new THREE.Vector3(0, 0, 0), new THREE.Vector3(4.8, 0, 0)]), new THREE.LineBasicMaterial({ color: 0x38bdf8 })));
    const packetMesh = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 16), new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7 }));
    rig.add(packetMesh);
    scene.add(rig);

    let frameId; let t = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      t += 0.015;
      rig.rotation.y = Math.sin(t * 0.35) * 0.45;
      pulumiMesh.rotation.y += 0.012;
      packetMesh.position.x = Math.sin(t * 1.4) * 4.8;
      renderer.render(scene, camera);
    };
    animate();
    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(frameId); if (container) container.innerHTML = ''; };
  }, [backendConnected]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/85 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Server className="h-6 w-6 text-sky-400" />
            <div>
              <h1 className="text-lg font-bold tracking-tight">Pulumi Homelab &amp; Proxmox Architecture Explainer</h1>
              <p className="text-xs text-slate-400">Christian Lempa Audit (WFyJ-xyJ58M) &bull; Dual-Plane Docker SQLite-Vec</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${backendConnected ? 'border-emerald-700 bg-emerald-950/70 text-emerald-300' : 'border-amber-700 bg-amber-950/70 text-amber-300'}`}>
              <span className={`h-2 w-2 rounded-full ${backendConnected ? 'animate-pulse bg-emerald-400' : 'bg-amber-400'}`} />
              <span>{probing ? 'Probing...' : backendConnected ? `Docker: ${backendUrl}` : `Offline (${backendUrl})`}</span>
            </div>
            <button type="button" onClick={() => probeBackend(backendUrl)} className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-700">
              <RefreshCw className={`h-3.5 w-3.5 ${probing ? 'animate-spin' : ''}`} /> Re-probe
            </button>
          </div>
        </div>
      </header>

      {isHttps && !backendConnected && (
        <div className="bg-slate-900 border-b border-slate-800 px-6 py-3 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            <span>HTTPS blocks HTTP loopback. Use Cloudflare Tunnel: cloudflared tunnel --url http://localhost:8000</span>
          </div>
          <form onSubmit={handleSaveBackendUrl} className="flex gap-2">
            <input type="text" value={customUrlInput} onChange={e => setCustomUrlInput(e.target.value)} className="bg-slate-950 border border-slate-700 rounded px-2.5 py-1 text-xs text-slate-100 w-64 font-mono" placeholder="https://tunnel.example.com" />
            <button type="submit" className="px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded text-xs font-semibold">Set</button>
          </form>
        </div>
      )}

      <main className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-6 p-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          <div className="flex gap-2 border-b border-slate-800 pb-2">
            {[{ id: 'topology', label: '3D Topology', icon: Cpu }, { id: 'search', label: 'SQLite-Vec Search', icon: Search }, { id: 'audit', label: 'Forensic Audit', icon: ShieldCheck }].map(tab => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold ${activeTab === tab.id ? 'border-sky-500/40 bg-sky-500/20 text-sky-300' : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200'}`}>
                  <Icon className="h-4 w-4" /> {tab.label}
                </button>
              );
            })}
          </div>

          {activeTab === 'topology' && (
            <>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-xl">
                <div className="mb-2 flex justify-between px-1">
                  <span className="text-xs uppercase text-slate-400">Proxmox VE &bull; SQLite WAL + sqlite-vec &bull; Pulumi SDK</span>
                  <span className="text-xs text-slate-500">WebGL 2.0</span>
                </div>
                <div ref={mountRef} className="h-[340px] w-full rounded-lg border border-slate-800 bg-slate-950" />
              </div>
              <form onSubmit={handleCommitSnapshot} className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
                <h2 className="text-base font-semibold flex items-center gap-2"><Layers className="h-5 w-5 text-sky-400" /> Pulumi State Reconciler</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <label className="text-xs uppercase text-slate-400 mb-1 block">Stack</label>
                    <select value={stackName} onChange={e => setStackName(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm">
                      <option value="dev">dev</option><option value="prod">prod</option>
                    </select>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <label className="text-xs uppercase text-slate-400 mb-1 block">VM ID</label>
                    <input type="number" value={vmId} onChange={e => setVmId(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm" />
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <label className="text-xs uppercase text-slate-400 mb-1 block">RAM: {vmMemory} MB</label>
                    <input type="range" min="2048" max="32768" step="1024" value={vmMemory} onChange={e => setVmMemory(Number(e.target.value))} className="w-full accent-sky-500" />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-4 pt-2">
                  <div className="flex gap-4 text-xs">
                    <label className="flex items-center gap-2"><input type="checkbox" checked={rebootAfterUpdate} onChange={e => setRebootAfterUpdate(e.target.checked)} className="rounded bg-slate-900 border-slate-700 text-sky-500" /> reboot_after_update=True</label>
                    <label className="flex items-center gap-2"><input type="checkbox" checked={ignoreDiskSpeed} onChange={e => setIgnoreDiskSpeed(e.target.checked)} className="rounded bg-slate-900 border-slate-700 text-sky-500" /> ignore_changes=[&quot;disks[0].speed&quot;]</label>
                  </div>
                  <button type="submit" className="px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-lg text-xs font-semibold">Commit Snapshot</button>
                </div>
              </form>
            </>
          )}

          {activeTab === 'search' && (
            <div className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
              <h2 className="text-base font-semibold flex items-center gap-2"><Database className="h-5 w-5 text-emerald-400" /> Hybrid Search (sqlite-vec + FTS5)</h2>
              <form onSubmit={handleHybridSearch} className="flex gap-2">
                <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search URN, memory, storage..." className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm" />
                <button type="submit" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-semibold">Search</button>
              </form>
              {searchResults && <pre className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto">{JSON.stringify(searchResults, null, 2)}</pre>}
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl text-sm text-slate-300">
              <h2 className="text-base font-bold">PhD-Level Audit: Christian Lempa Pulumi Homelab</h2>
              <div className="border-l-2 border-rose-500 pl-4"><h3 className="font-semibold text-rose-300">1. Local State Concurrency</h3><p className="text-xs">Local JSON checkpoints lack atomic locking. SQLite WAL + sqlite-vec provides ACID serializability.</p></div>
              <div className="border-l-2 border-amber-500 pl-4"><h3 className="font-semibold text-amber-300">2. Secret Monad Tainting</h3><p className="text-xs">String interpolation on Output&lt;T&gt; can leak plaintext secrets into state JSON.</p></div>
              <div className="border-l-2 border-sky-500 pl-4"><h3 className="font-semibold text-sky-300">3. Proxmox Phantom Diffs</h3><p className="text-xs">Terraform bridge requires explicit ignore_changes for disk throttle attributes.</p></div>
            </div>
          )}
        </div>

        <aside className="space-y-6 lg:col-span-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-xl space-y-3">
            <h3 className="text-sm font-semibold flex items-center gap-2"><Server className="h-4 w-4 text-sky-400" /> State Checkpoints ({snapshots.length})</h3>
            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {snapshots.map(s => (
                <div key={s.id} className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono space-y-1">
                  <div className="flex justify-between text-sky-400"><span>stack: {s.stack_name}</span><span>VM {s.vm_id}</span></div>
                  <div className="text-slate-300 break-all text-[11px]">{s.urn}</div>
                  <div className="text-slate-500 text-[11px]">RAM: {s.memory_mb}MB &bull; Cores: {s.cores}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-xl space-y-3">
            <h3 className="text-sm font-semibold flex items-center gap-2"><BookOpen className="h-4 w-4 text-amber-400" /> References</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="https://www.pulumi.com/docs/concepts/state/" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">[1] Pulumi State</a></li>
              <li><a href="https://registry.terraform.io/providers/bpg/proxmox/latest/docs" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">[2] Proxmox Provider</a></li>
              <li><a href="https://github.com/asg017/sqlite-vec" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">[3] sqlite-vec</a></li>
              <li className="text-slate-400">[4] Kleppmann (2017) DDIA, ISBN 978-1449373320.</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
