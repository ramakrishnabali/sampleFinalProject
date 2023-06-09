import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const FilterRoute = props => {
  const {employmentType, salaryRange} = props
  return (
    <>
      <h1 className="filter-heading">Type of Employment</h1>
      <ul className="employment-container">
        {employmentTypesList.map(eachList => {
          const getEmployment = event => {
            employmentType(event)
          }

          return (
            <li className="filter-container" key={eachList.employmentTypeId}>
              <input
                value={eachList.employmentTypeId}
                onChange={getEmployment}
                className="employment-input"
                type="checkbox"
              />
              <p className="employment-type">{eachList.label}</p>
            </li>
          )
        })}
      </ul>
      <hr className="hr-line" />
      <h1 className="filter-heading">Salary Range</h1>

      <ul className="employment-container">
        {salaryRangesList.map(eachList => {
          const getSalaryRange = () => {
            salaryRange(eachList.salaryRangeId)
          }

          return (
            <li className="filter-container" key={eachList.salaryRangeId}>
              <input
                onChange={getSalaryRange}
                className="employment-input"
                type="radio"
                name="range"
              />
              <p className="employment-type">{eachList.label}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default FilterRoute
