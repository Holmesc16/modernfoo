import { RiShirtLine as shirtIcon } from 'react-icons/ri'

export default {
    name: 'merch',
    title: 'merch',
    type: 'document',
    icon: shirtIcon,
    fields: [
        {
            name: 'name',
            title: 'Merch Name',
            type: 'string',
            description: 'Name of merch item'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of merch item',
            validation: Rule => Rule.min(10)
            //@TODO : Add custom input component
        },
    ]
};