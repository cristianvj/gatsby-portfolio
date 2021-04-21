import React from "react"
import Title from "./Title"
//import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
//import {faDivide} from '@fortawesome/free-solid-svg-icons';

const query = graphql`
  {
    allStrapiJobs {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {

  const data = useStaticQuery(query)
  const { allStrapiJobs: {nodes: jobs}} = data
  const [value, setValue] = React.useState(0)
  const {company, position, date, desc} = jobs[2]

  return(
    <section className="section jobs">
      <Title title='experience' />
      <div className='jobs-center'>
        {/** btn container */}
        <div className='btn-container'>
          {
            jobs.map((item, index)=>{
              return <button key={item.strapiId} className={`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
            })
          } 
        </div>
      </div>
    </section>
  )
}

export default Jobs
