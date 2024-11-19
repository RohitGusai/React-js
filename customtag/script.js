
function getdomelement(domElement,container)
{
    const containers = document.createElement(domElement.type);
    containers.innerHTML = domElement.children;
    containers.setAttribute('href',domElement.props.href);
    containers.setAttribute('target',domElement.props.target);

    container.appendChild(containers);
}
const domElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : "_blank"
    },
    children : "Hello click me"
}

const root = document.getElementById('root').innerHTML;
console.log(root);





getdomelement(domElement,root);