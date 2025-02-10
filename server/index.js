const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8000;

app.use(bodyParser.json());

let users = [];
let counter = 1;

//path:get/user สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users',(req,res)=>{
    res.json(users);
});

//path:post /user สำหรับสร้าง users ใหม่บันทึกเข้าไป
app.post('/user',(req,res)=>{
    let user = req.body;
    user.id = counter
    counter++;
    users.push(user);
    res.json({
        message: 'Create new user successfully',
        user: user,
    });
})


//path: /user/:id สำหรับแก้ไข users รายคน
app.put('/user/:id',(req,res)=>{
    let id = req.params.id;
    let updateUser = req.body;
    //ค้นหา users ที่ต้องการแก้ไข
    let selectedIndex = users.findIndex(user=>user.id == id);

    //แก้ไขข้อมูล users 
    if(updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if(updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname;
    }

    res.json({
        message: 'Update user successfully',
        data : {
            user : updateUser,
            indexUpdated : selectedIndex
    }
})
})

//path: /user/:id สำหรับลบ users รายคน
app.delete('/user/:id',(req,res)=>{
    let id = req.params.id;
    //หา index ของ user ที่ต้องการลบ
    let selectedIndex = users.findIndex(user=>user.id == id);

    //ลบ user ที่ต้องการ
    users.splice(selectedIndex,1);
    res.json({
        message: 'Delete user successfully',
        indexDeleted: selectedIndex
    })
})

app.listen(port,(req,res)=>{
    console.log('Http Server is running on port '+port);
});