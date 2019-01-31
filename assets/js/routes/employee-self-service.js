const employeeSelfService = {
  header: true,
  label: 'Employee Self Service',
  icon: 'employee_self_service',
  meta: {
    name: 'employee_self_service',
    level: 1
  },
  children: [
    // Team //
    {
      label: 'Team',
      meta: {
        name: 'team',
        level: 2
      },
      children: [{
        path: '/team/',
        label: 'Team',
        meta: {
          name: 'team',
          level: 3
        }
      }, {
        path: '/team/team_profile/',
        label: 'My Team Profile',
        meta: {
          name: 'team_profile',
          level: 3
        }
      }, {
        path: '/team/delegations/',
        label: 'Delegations',
        meta: {
          name: 'delegations',
          level: 3
        }
      }]
    }
  ]
}
export default employeeSelfService;
