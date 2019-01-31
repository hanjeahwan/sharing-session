const compensationPayroll = {
  header: true,
  label: 'Compensation Payroll',
  icon: 'compensation_payroll',
  meta: {
    name: 'compensation_payroll',
    level: 1
  },
  children: [
    // Payroll //
    {
      label: 'Payroll',
      path: '/payroll/',
      meta: {
        name: 'payroll',
        level: 2
      }
    }
  ]
}
export default compensationPayroll;
