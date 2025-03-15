const BASE_URL = 'http://localhost:8000';
window.onload = async () => {
    await loadData()
}
const loadData = async () => {
    console.log('user page loaded');
    //1. load user ทั้งหมดจาก api ที่เตรียมไว้
    const respone = await axios.get(`${BASE_URL}/users`)

    console.log(respone.data);

    const userDOM = document.getElementById('user')
    //2. นำ user ทั้งหมด โหลดกลับเข้าไปใน html
   
    let htmlData = '<div>'
    for (let i = 0; i < respone.data.length; i++) {
        let user = respone.data[i]
        htmlData += `<div>
        <table>
            <tr>
                <td style="width:5%"> ${user.id} </td> 
                <td style="width:35%"> ${user.firstname} </td> 
                <td style="width:35%"> ${user.lastname}  </td> 
                <td style="width:10%"> <a href='index.html?id=${user.id}'><button class="button1">Edit</button></a> </td> 
                <td style="width:10%"> <button class="button1" class = 'delete' data-id='${user.id}'>delete</button> </td> 
            </tr>
        </table>
        </div >`
    }
    htmlData += '</div>'
    userDOM.innerHTML = htmlData

    //3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            //ดึง id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id
            try {
                await axios.delete(`${BASE_URL}/users/${id}`)
                loadData() //recursive function = เรียกใช้ฟังก์ชัน -> ตัวเอง
            } catch (error) {
                console.error('error', error)
            }
        })
    }
}