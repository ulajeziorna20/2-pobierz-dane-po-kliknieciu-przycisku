let btn = document.getElementById(`btn`);
console.log(btn);


const getData = () => {


    fetch(`https://akademia108.pl/api/ajax/get-post.php`)

        // mode: `corse`,
        // method: `GET`,
        // })

        .then(res => res.json())
        .then(data => {
            console.log(data);

            console.log(data.userId);
            console.log(data.id);
            console.log(data.title);
            console.log(data.body);


            let p1 = document.createElement(`p`);
            console.log(p1);
            let p2 = document.createElement(`p`);
            console.log(p2);
            let p3 = document.createElement(`p`);
            console.log(p3);
            let p4 = document.createElement(`p`);
            console.log(p4);

            p1.innerText = `UserID : ` + data.userId;
            p2.innerText = `ID : ` + data.id;
            p3.innerText = `Title : ` + data.title;
            p4.innerText = `Body : ` + data.body;


            document.body.appendChild(p1);
            document.body.appendChild(p2);
            document.body.appendChild(p3);
            document.body.appendChild(p4);


    

            // let arrWithData = [data.userId, data.id, data.title, data.body];
            // console.log(arrWithData);


            // let oL = document.createElement(`ol`);
            // console.log(oL);

            // arrWithData.forEach(data => {

            //     let elementyListyLi = document.createElement(`li`);
            //     console.log(elementyListyLi);

            //     elementyListyLi.className = `data`;
            //     elementyListyLi.innerText = data;

            //     oL.appendChild(elementyListyLi);


            //     document.body.appendChild(oL);
            // })



        });


}



btn.addEventListener(`click`, getData);