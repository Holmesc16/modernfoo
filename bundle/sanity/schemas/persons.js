import { IoIosPersonAdd as personIcon } from 'react-icons/io'
import { number } from 'prop-types';

export default {
    name: 'person',
    title: 'person',
    type: 'document',
    icon: personIcon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Describe the person'
        }
    ]
};