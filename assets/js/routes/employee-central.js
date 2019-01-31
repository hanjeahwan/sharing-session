const employeeCentral = {
  header: true,
  label: 'Employee Central',
  icon: 'employee_central',
  meta: {
    name: 'employee_central',
    level: 1
  },
  children: [{
      path: '/admin/',
      label: 'Home',
      meta: {
        name: 'home',
        match: 'admin',
        level: 2,
      }
    },
    {
      label: 'Organization',
      meta: {
        name: 'organizations',
        match: 'organization',
        level: 2
      },
      children: [{
        path: '/admin/organization/',
        label: 'Organization',
        meta: {
          name: 'organization',
          level: 3
        }
      }, {
        path: '/admin/organization/department/',
        label: 'Department & Team',
        meta: {
          name: 'department_and_team',
          level: 3
        }
      }, {
        path: '/admin/organization/location/',
        label: 'Location',
        meta: {
          name: 'location',
          level: 3
        }
      }, {
        path: '/admin/organization/cost-centers/',
        label: 'Cost Centers',
        meta: {
          name: 'cost_center',
          level: 3
        }
      }]
    },
    {
      label: 'Employees',
      meta: {
        name: 'employees',
        match: 'employees',
        level: 2
      },
      children: [{
        path: '/admin/employees/',
        label: 'Employees',
        meta: {
          name: 'views',
          level: 3,
          checkProperty: 'view_employee'
        },
      }, {
        path: '/admin/employees/hire/',
        label: 'Hire',
        meta: {
          name: 'hire',
          level: 3,
        }
      }, {
        path: '/admin/employees/audit/',
        label: 'Data Changes Audit',
        meta: {
          name: 'history',
          level: 3,
          checkProperty: 'view_employee_change_histories_audit'
        }
      }, {
        path: '/admin/employees/role/',
        label: 'Role Access',
        meta: {
          name: 'role_access',
          level: 3,
        }
      }]
    },
    {
      label: 'Pay',
      meta: {
        name: 'payroll_setup',
        match: 'pay-group',
        level: 2
      },
      children: [{
        path: '/admin/pay-group/',
        label: 'Pay Group',
        meta: {
          name: 'pay_group',
          level: 3,
        },
      }, {
        path: '/admin/pay-group/policy/',
        label: 'Pay Policy',
        meta: {
          name: 'pay_policy',
          level: 3,
        }
      }, {
        path: '/admin/pay-group/element/',
        label: 'Pay Element',
        meta: {
          name: 'pay_element',
          level: 3,
        }
      }, {
        path: '/admin/pay-group/grade/',
        label: 'Pay Grade',
        meta: {
          name: 'pay_grade',
          level: 3,
        }
      }, {
        path: '/admin/pay-group/calendar/',
        label: 'Pay Calendar',
        meta: {
          name: 'pay_calendar',
          level: 3,
        }
      }]
    },
    {
      label: 'Job',
      meta: {
        name: 'job_profile',
        match: 'job-profile',
        level: 2
      },
      children: [{
        path: '/admin/job-profile/',
        label: 'Job Profile',
        meta: {
          name: 'job_profile',
          level: 3,
        },
      }, {
        path: '/admin/job-profile/attribute/',
        label: 'Job Attribute',
        meta: {
          name: 'job_attributes',
          level: 3,
        },
      }]
    },
    {
      label: 'Settings',
      meta: {
        name: 'workflow_approval_admin_setup',
        match: 'workflow',
        level: 2
      },
      children: [{
        path: '/admin/workflow/',
        label: 'Approval Workflow',
        meta: {
          name: 'workflow',
          level: 3,
        },
      }, {
        path: '/admin/workflow/events-reason/',
        label: 'Events Reasons',
        meta: {
          name: 'events_reasons',
          level: 3,
        },
      }, {
        path: '/admin/workflow/roles/',
        label: 'Roles',
        meta: {
          name: 'roles',
          level: 3,
        },
      }]
    },
    // Report //
    // {
    //   path: '/admin/report_analytics/',
    //   label: 'Report',
    //   meta: {
    //     name: 'report_analytics',
    //     level: 2
    //   },
    //   children: [ {
    //     path: '/admin/report_analytics/',
    //     label: 'Report Analytics',
    //     meta: {
    //       name: 'report_analytics'
    //     },
    //   }]
    // }
  ]
}
export default employeeCentral;
