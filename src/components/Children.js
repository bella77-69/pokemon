export default function Children (props) {
    console.log(props.children);

    return (
       <div><props.children word="Pokemon"/></div>
    )
}