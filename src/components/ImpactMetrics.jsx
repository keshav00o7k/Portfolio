import '../css/impactMetrics.css';

const metrics = [
  {
    icon: 'fa-solid fa-globe',
    stat: '4+ Live Platforms',
    title: 'Production Deployments',
    desc: 'Fotographiya AI, Commercial portals & Budget Flow Tracker.',
  },
  {
    icon: 'fa-solid fa-bolt',
    stat: 'Sub-Second',
    title: 'AI Facial Search',
    desc: 'Vector embeddings with InsightFace & FAISS.',
  },
  {
    icon: 'fa-solid fa-layer-group',
    stat: 'MERN + CV',
    title: 'Full-Stack Architecture',
    desc: 'Scalable REST APIs, MongoDB & Computer Vision pipelines.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    stat: 'Secure & Async',
    title: 'Backend Systems',
    desc: 'JWT auth, Email OTP & asynchronous media queues.',
  },
];

const ImpactMetrics = () => {
  return (
    <div className="metrics-strip" aria-label="Key Engineering Highlights">
      {metrics.map((item, index) => (
        <div key={index} className="metric-item">
          <div className="metric-item__stat">
            <i className={`${item.icon} metric-item__icon`} aria-hidden="true"></i>
            <span>{item.stat}</span>
          </div>
          <div className="metric-item__title">{item.title}</div>
          <p className="metric-item__desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ImpactMetrics;
