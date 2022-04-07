let colorPicker = new iro.ColorPicker('#picker', {
  width: 200,
  layout: [{
    component: iro.ui.Wheel,
    options: {}
  }, {
    component: iro.ui.Slider,
    options: {
      sliderType: "saturation"
    }
  }]
});
colorPicker.on("input:move", function(color) {
  $('.displayBar').css("background-color", color.hexString);
  colorValue.innerHTML = [
    "hex: " + color.hexString,
    "rgb: " + color.rgbString,
    "hsl: " + color.hslString
  ].join("<br>");
});

//*************************************

let colorPickerBg = new iro.ColorPicker('#navbarpickerBg', {
  width: 200,
  layout: [{
    component: iro.ui.Wheel,
    options: {}
  }, {
    component: iro.ui.Slider,
    options: {
      sliderType: "saturation"
    }
  }]
});
let navHexBg = "";
colorPickerBg.on("input:move", function(color) {
  navHexBg = color.hexString;
  $('.customNav').css("background-color", navHexBg);
});

//****************************************

let colorPickerBd = new iro.ColorPicker('#navbarpickerBd', {
  width: 200,
  layout: [{
    component: iro.ui.Wheel,
    options: {}
  }, {
    component: iro.ui.Slider,
    options: {
      sliderType: "saturation"
    }
  }]
});
let navHexBd = "";
colorPickerBd.on("input:move", function(color) {
  navHexBd = color.hexString;
  $('.customNav').css("border-color", navHexBd);
});

//*******************************************

let c = 1;
$('.coloroptions').click(function() {
  c++;
  if (c % 2 === 0) {
    $('.colorset').css("display", "block");
  } else {
    $('.colorset').css("display", "none");
  }
});
$('.navoptions').click(function() {
  c++;
  if (c % 2 === 0) {
    $('.navset').css("display", "block");
  } else {
    $('.navset').css("display", "none");
  }
});

//********************************************
let c1 = 1;
$('.navbuttoncustom').click(function() {
  c1++;
  if (c1 % 2 == 0) {
    $('.navbarpicker').css('display', 'block');
    $('.set').css('display', 'block');
    $('.navbuttoncustom').text("Hide")
    $('.navbuttoncustom').addClass('customNav');
    $('.navbuttoncustom').css('', 'block');
  } else {
    $('.navbarpicker').css('display', 'none');
    $('.set').css('display', 'none');
    $('.navbuttoncustom').removeClass('customNav');
    $('.navbuttoncustom').text("Custom Navbar");
  }
});

//*************************************************

$('.navbutton1').click(function() {
  $('.pageNavBar').css({
    'background-color': 'black',
    'color': '#ffffff',
    'display': 'block'
  });
});
$('.navbutton2').click(function() {
  $('.pageNavBar').css({
    'background-color': 'white',
    'color': 'black',
    'display': 'block'
  });
});
$('.navbutton3').click(function() {
  $('.pageNavBar').css({
    'background-color': 'balck',
    'color': 'grey',
    'display': 'block'
  });
});
$('.navbutton4').click(function() {
  $('.pageNavBar').css({
    'background-color': 'grey',
    'color': 'white',
    'display': 'block'
  });
});
$('.navbutton5').click(function() {
  $('.pageNavBar').css({
    'background-color': '#020040',
    'color': '#0AB5C4',
    'display': 'block'
  });
});
$('.set').click(function() {
  $('.pageNavBar').css({
    'background-color': navHexBd,
    'color': navHexBg,
    'display': 'block'
  });
});

//**************************************
let c3 = 1;
$('.divoptions').click(function() {
  c3++;
  if (c3 % 2 == 0) {
    $('.divset').css('display', 'block');
  } else {
    $('.divset').css('display', 'none');
  }
});
let height = 0;
let width = 0;
let c4 = 1;
let c5 = 1;
let y = 0;
let x = 0;
let divcount = 0;
let newDivArrays = [];
$('.divbutton').click(function() {
  c4++;
  alert('Click Where You Want To Start Your Div From In Your Website Body')
  $('.displayBar').click(function(click) {
    y = click.pageY;
    x = click.pageX;
    alert('Your Starting Points Are (' + x + ' , ' + y + ')');
    c5++;
    if (c5 % 2 == 0) {
      $('.divdetails').css('display', 'block');
      $('.divDetailsSubmit').click(function() {
        divcount++;
        let newclass = 'newdiv' + divcount;
        newDivArrays.push(newclass);
        height = document.getElementById('height').value;
        width = document.getElementById('width').value;
        $("<div class=" + newclass + "></div>").appendTo("body");
        $('.' + newclass).css({
          'height': height,
          'width': width,
          "position": 'absolute',
          "top": y,
          "left": x,
          'border-style': 'dashed',
          'border-color': 'grey'
        });
      });
    } else {
      $('.divdetails').css('display', 'none');
    }
  });
});

//*****************************************