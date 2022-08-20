export default function MessageBox(props)
{
    //console.log('props',props.alert);
    const msg =props.msg;
    const alert = props.alert;
    const alertClass= "alert alert-"+alert;

    return (

        <p className={alertClass}>{msg}</p>

    );
}