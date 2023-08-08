import {Client} from '@notionhq/client'
import { useEffect, useState } from 'react'

const notion = new Client({
  auth: process.env.NOTION_KEY
})
const databaseId = process.env.NOTION_DATABASE_ID

notion.databases.query({
  database_id: databaseId,
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})

const Notion = () => {

  const [data, setData] = useState([])

    return (
        <div>
            <h1>Notion</h1>
        </div>
    )
}

export default Notion;