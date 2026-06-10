import {test,expect} from '@playwright/test'
import  {Table} from '../POM/Table'


test("Table practise",async ({page})=>{
    const table=new Table(page)
    await table.navigate()
    await table.tablecolumnsheaderverification()
})