export class GeralUtil
{
    static fileToBase64 = (file: any) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    static base64StartsWithData(base64:any):string
    {
        if(base64)
        {
            if(base64.toString().startsWith('data'))
            {
                return(base64);
            }
    
            return('data:image/jpeg;base64,'+base64);
        }

        return(base64);
    }
}