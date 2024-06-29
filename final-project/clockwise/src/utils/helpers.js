/* 
awit fetch 
res => ok(res.json) or not (throw err)
data => return 
-- catch(e)- return r 
*/
//image API
export const getRandomeImage = async () => {
    return await fetch("https://apis.gdscasu.com/image")
        .then((res) => {
            if (!res.ok) {
                throw new Error("HTTP response was not ok");
            }
            return res.json();
        })
        .then((d) => {
            console.log(d);
            return {
                imgSrc: d.images[0],
            };
        })
        .catch((e) => {
            return e;
        });
};
//Quote API 
export const getRandomeQuote = async () => {
    return await fetch("https://apis.gdscasu.com/quote")
        .then((res) => {
            if (!res.ok) {
                throw new Error("HTTP response was not ok");
            }
            return res.json();
        })
        .then((d) => {
            console.log(d);
            return {
                quote: d.text,
                author: d.author,
            };
        })
        .catch((e) => {
            return e;
        });
};