

function randomChoice() {
    let rand =   Math.floor(Math.random() * 3) + 1 
    console.log(rand)
    return rand
}
document.querySelectorAll('.content  .box').forEach(function(item){
    item.addEventListener('click',function(){
        let computer = randomChoice()
        let player = parseInt(this.getAttribute('data-value'))

        if(player === 1){
            if(computer === 1){
                document.querySelector('.player-one').textContent = "fre"
                document.querySelector('.player-two').textContent = "fre"
                document.querySelector('.player-one').style.color = "yellow"
                document.querySelector('.player-two').style.color = "yellow"
            }else if(computer === 2){
                document.querySelector('.player-one').textContent = "wageba"
                document.querySelector('.player-one').style.color = "red"
                document.querySelector('.player-two').textContent = "mogeba"
                document.querySelector('.player-two').style.color = "green"
            }else{
                document.querySelector('.player-one').textContent = "mogeba"
                document.querySelector('.player-one').style.color = "green"
                document.querySelector('.player-two').textContent = "wageba"
                document.querySelector('.player-two').style.color = "red"
            }
        }
        else if(player === 2){
            if(computer === 1){
                document.querySelector('.player-one').textContent = "mogeba"
                document.querySelector('.player-one').style.color = 'green'
                document.querySelector('.player-two').textContent = "wageba"
                document.querySelector('.player-two').style.color = "red"
            }else if(computer === 2){
                document.querySelector('.player-one').textContent = "fre"
                document.querySelector('.player-two').textContent = "fre"
                document.querySelector('.player-one').style.color = "yellow"
                document.querySelector('.player-two').style.color = "yellow"
            }else{
                document.querySelector('.player-one').textContent = "wageba"
                document.querySelector('.player-one').style.color = "red"
                document.querySelector('.player-two').textContent = "mogeba"
                document.querySelector('.player-two').style.color = "green"
            }
        }
        else{
            if(computer === 1){
                document.querySelector('.player-one').textContent = "wageba"
                document.querySelector('.player-one').style.color = "red"
                document.querySelector('.player-two').textContent = "mogeba"
                document.querySelector('.player-two').style.color = "green"
            }else if(computer === 2){
                document.querySelector('.player-one').textContent = "mogeba"
                document.querySelector('.player-one').style.color = "green"
                document.querySelector('.player-two').textContent = "wageba"
                document.querySelector('.player-two').style.color = "red"
            }else{
                document.querySelector('.player-one').textContent = "fre"
                document.querySelector('.player-two').textContent = "fre"
                document.querySelector('.player-one').style.color = "yellow"
                document.querySelector('.player-two').style.color = "yellow"
            }
        }
    })
})
 
document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('.player-one').textContent = '00'
    document.querySelector('.player-two').textContent = '00'
})

