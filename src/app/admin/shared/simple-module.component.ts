import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-simple-module',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-head">
      <div>
        <div class="eyebrow">SYMMETRY CMS</div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <button class="primary">+ Add {{ title === 'Roles & Permissions' ? 'Role' : title }}</button>
    </div>

    <div class="module-grid">
      <div class="module-card">
        <div class="module-icon">✦</div>
        <h2>{{ title }} Manager</h2>
        <p>{{ description }}</p>
        <div class="placeholder-row"><span>Content records</span><strong>Ready</strong></div>
        <div class="placeholder-row"><span>API integration</span><strong>Pending</strong></div>
        <button class="secondary">Open Manager →</button>
      </div>
      <div class="module-card">
        <div class="module-icon">◇</div>
        <h2>Quick Setup</h2>
        <p>Connect this module to your Node.js / Express REST API and MongoDB collection.</p>
        <div class="code-box">/api/{{ apiName }}</div>
        <button class="secondary">Configure API →</button>
      </div>
    </div>
  `,
  styles: [`
    :host{display:block}.page-head{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:24px}.eyebrow{font-size:10px;letter-spacing:.17em;color:#a1844d;font-weight:800}.page-head h1{font:500 30px Georgia,serif;margin:7px 0}.page-head p{font-size:11px;color:#8b877e;margin:0}.primary,.secondary{border-radius:7px;padding:10px 13px;font-size:10px;font-weight:700;cursor:pointer}.primary{background:#1c1c1b;color:white;border:1px solid #1c1c1b}.secondary{background:#fff;border:1px solid #ddd8ce;color:#4b4841}.module-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.module-card{background:#fff;border:1px solid #e7e2d9;border-radius:10px;padding:24px}.module-icon{width:38px;height:38px;border-radius:8px;background:#f3eee5;color:#a1844d;display:grid;place-items:center}.module-card h2{font:500 20px Georgia,serif;margin:16px 0 6px}.module-card p{font-size:10px;color:#8c877f;line-height:1.7;max-width:480px}.placeholder-row{display:flex;justify-content:space-between;border-top:1px solid #eee9e1;padding:11px 0;font-size:9px;color:#8e8980}.placeholder-row strong{color:#6c805f}.code-box{margin:17px 0;background:#1d1d1b;color:#d6c6a0;padding:12px;border-radius:7px;font:11px monospace}@media(max-width:700px){.module-grid{grid-template-columns:1fr}.page-head{align-items:flex-start;flex-direction:column;gap:14px}}
  `]
})
export class SimpleModuleComponent {
  private route = inject(ActivatedRoute);
  title = this.route.snapshot.data['title'] || 'Module';
  description = this.route.snapshot.data['description'] || 'Manage CMS content.';
  apiName = this.title.toLowerCase().replace(/[^a-z]+/g, '-');
}
