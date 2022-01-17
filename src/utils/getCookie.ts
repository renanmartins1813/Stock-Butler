export default function getCookie(){
    return (
        document.cookie.split(';')
            .map(cookie =>{
                return cookie.split('=');
            }).reduce( (accumulator, [key, value])=>{
                return(
                    {...accumulator, [key.trim()]: value}
                );
            },{})
    );
}