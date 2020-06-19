/*
 * @Author: CL
 * @Date: 2020-06-19 00:30:56 
 * @Last Modified by: CL
 * @Last Modified time: 2020-06-19 15:33:56
 */

(function () {
  //监听所有元素事件的方法
  function eventListener() {
    //监听发送按钮的点击事件
    $('.send').on('click', () => {
      //获取到输入框的内容
      let value = $('.inputtext').val();
      //要把内容渲染到聊天区域
      render('mine', value);
      //这时候机器人要说话了, 机器人要根据你说的话才能回答你
      ajax(value);
      //要把输入框清空
      $('.inputtext').val('');
      //把焦点聚焦在输入框
      $('.inputtext').focus();
    })

    //监听输入框的回车事件
    $('.inputtext').on('keyup', (e) => {
      if (e.keyCode === 13) {
        //如果按下了回车键， 触发click事件
        $('.send').trigger('click');
      }
    })
  }

  //页面渲染方法
  function render(type, val) {
    if (type === 'mine') {
      //如果是我自己说的话
      content(type, val);
    } else {
      //如果是机器人说的话
      content(type, val);
    }
  }

  //真正渲染的内容的方法
  function content(type, val) {
    if (val) { //为了防止没有输入什么内容
      $(`
       <div class=${ type}>
         <div class="pic"></div>
         <div class="text">${val}</div>
       </div>
      `).appendTo($('.content'));

      //聊天区始终是最新的
      scroll();
    }
  }

  //ajax请求，请求数据
  //你需要把你说的话，传给机器人，他才能回你一句话
  function ajax(text) {
    if (text) { //当内容不为空时，在进行请求
      $.ajax({
        url: 'http://127.0.0.1:3000/chat',
        method: 'get',
        dataType: 'json',
        data: {
          text
        },
        success(res) {
          render('robot', res.text);
        },
        error(err) {
          console.log(err);
        }
      })
    }
  }

  //滚动条事件
  function scroll() {
    //滚动的高度 - div的高度 = 滚动的距离
    const scrollTop = $('.content')[0].scrollHeight - $('.content')[0].clientHeight;
    $('.content')[0].scrollTop = scrollTop;
  }

  eventListener();
})()