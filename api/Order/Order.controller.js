const { bool } = require("joi");
const nodemon = require("nodemon");
const pool = require("../../config/database");
module.exports ={
    Buy : (req, res) =>{ 
        const body = req.body
        const Book_id = req.body.Book_id;
        // Buy(Book_id, (err,results) =>{
        //         if (err){
        //             console.log(err);
        //             console.log("error")
        //             return;
        //         }
        //         if(results.length >0){
        //            return  res.send({
        //             success :1,
        //             data: results
        //             });
        //         }
        //         return res.send({
        //             success :0,
        //             data: "Book is not found try agaain!"
        //         });
            
        // });


        var obj = {
            table: []
         };
         obj.table.push({Book_id: Book_id});
         var json = JSON.stringify(obj);
         console.log("step1")
         var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
            let request = new XMLHttpRequest();
            console.log("step2")
            request.open("PUT","http://localhost:2000/api/Catalog/BookUpdate");
            console.log("step3")
            request.send(Book_id);
            console.log("step4")
            console.log(request.statusText)
            console.log(request.status)
            console.log(request)
            
       request.onload = () =>{
        console.log("step5")
         //  console.log(requset);
           console.log("step6")
           if(request.status == 200){
               console.log("done")
             //  console.log(JSON.parse(request.response));
            //    let j = JSON.parse(request.response)
            //    res.send({
            //    j
               
            //        });
           }
           else{
               console.log(`error ${request.status} ${request.statusText}`)
           }
       }
             
             
            }            

        };