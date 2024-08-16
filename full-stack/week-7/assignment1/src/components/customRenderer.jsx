import {useEffect,useState} from 'react';



const CustomRenderer = () => {
    const [a,seta] = useState('')
    const reactElement = {
        type: 'a',
        props: {
            href: 'https:www.google.com',
            target:'_blank',
            children: ['Click me'],
        },
    }

    function generateHTML(element){
        const {type, props} = element;
        const children = props.children || []
        const attributes = Object.keys(props).filter((key)=> key!== 'children')
        .map((key) => `${key}="${props[key]}"`).join(' ')

        const childHTML = children.map((child) => {
            return typeof child === 'object' ? generateHTML(child): child
        }).join(' ')

        seta(`<${type} ${attributes}>${childHTML}</${type}>`)
    }

    function customRenderer(element, container){
        const html = generateHTML(element)
        container.innerHTML = html;
    }


    useEffect(()=> {
        customRenderer(reactElement,document.getElementsByClassName('elemRender'))
    },[])

    return (

        <div
            className = 'flex items-center justify center w-screen py20 elemRender'
            dangerouslySetInnerHTML={{__html:a}}
            >
        </div>
    )

}



export default CustomRenderer;