import { RiShirtLine as shirtIcon } from 'react-icons/ri'
import { number } from 'prop-types';

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
            name: 'type',
            title: 'Merch Type',
            type: 'string',
            description: 'Type of merch (shirt, sticker, bandana, etc.)',
            options: {
                list: [
                    { title: 'Shirt', value: 'shirt' },
                    { title: 'Hat', value: 'hat' },
                    { title: 'Sticker', value: 'sticker' },
                    { title: 'Outerwear', value: 'outerwear' },
                    { title: 'Socks', value: 'socks' },
                    { title: 'Air Freshener', value: 'air-freshener' },
                    { title: 'Keychain', value: 'keychain' },
                    { title: 'Lanyard', value: 'lanyard' },
                    { title: 'Coaster', value: 'coaster' },
                    { title: 'Koozie', value: 'koozie' },
                    { title: 'Skateboard Deck', value: 'skateboard-deck' }
                ]
            }
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
            type: 'string',
            description: 'Brief description of merch item'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of merch item',
            validation: Rule => Rule.min(10)
            //@TODO : Add custom input component
        },
        {
            name: 'stock',
            title: 'Stock',
            type: 'number',
            description: 'Available stock for this merch item',
            validation: Rule => Rule.max(99)
        }
    ]
};