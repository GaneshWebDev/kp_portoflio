import { defineField,defineType } from "sanity";
export default defineType({
    name:'contact_details',
    title:'Contact Details',
    type:'document',
    fields:[
        defineField({
            name:'mobile_number',
            title:'Mobile Number',
            type:'string'
        }),
        defineField({
            name:'Email',
            title:'Email',
            type:'email'
        })
    ]
})