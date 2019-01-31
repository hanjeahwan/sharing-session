const recruiting = {
  header: true,
  label: 'Recruiting',
  icon: 'recruiting',
  meta: {
    name: 'recruiting',
    level: 1
  },
  children: [
    // Recruiting //
    {
      label: 'Requisition',
      path: '/requisition/',
      meta: {
        name: 'requisition',
        level: 2,
        checkProperty: 'view_requisitions'
      }
    },
    {
      label: 'Candidate',
      path: '/candidate/',
      meta: {
        name: 'candidate',
        level: 2,
        checkProperty: 'view_candidates'
      }
    },
    {
      label: 'Job',
      path: '/job/',
      meta: {
        name: 'job',
        level: 2,
        checkProperty: 'view_jobs'
      }
    },
    {
      label: 'Interview',
      path: '/interview/',
      meta: {
        name: 'interview',
        level: 2,
        checkProperty: 'view_interviews'
      }
    }
  ]
}
export default recruiting;
