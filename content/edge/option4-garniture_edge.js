/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='content/edge/images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'option1-4-fond2',
            type:'image',
            rect:['-320px','-149px','1280px','594px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"option1-4-fond2.png",'0px','0px'],
            transform:[[],[],[],['0.5','0.5']]
         },
         {
            id:'Ellipse',
            type:'ellipse',
            rect:['267px','-133px','190px','133px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(48,120,241,0.80)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'option1-4-fond1',
            type:'image',
            rect:['-320px','-149px','1280px','594px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"option1-4-fond1.png",'0px','0px'],
            transform:[[],[],[],['0.5','0.5']]
         },
         {
            id:'option1-4-masque',
            type:'image',
            rect:['130px','-103px','229px','534px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"option1-4-masque.png",'0px','0px'],
            transform:[[],[],[],['0.5','0.5']]
         },
         {
            id:'option1-4-legende',
            type:'image',
            rect:['-320px','-149px','1280px','594px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"option1-4-legende.png",'0px','0px'],
            transform:[[],[],[],['0.5','0.5']]
         },
         {
            id:'btn',
            display:'none',
            type:'rect',
            rect:['505','16','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'btn',
            symbolName:'btn'
         }
         ]
      },
   states: {
      "Base State": {
         "${_option1-4-legende}": [
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '-320px'],
            ["style", "top", '-148px'],
            ["transform", "scaleY", '0.5']
         ],
         "${_option1-4-fond2}": [
            ["style", "top", '-149px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '-320px']
         ],
         "${_Ellipse}": [
            ["style", "top", '-133px'],
            ["transform", "scaleY", '1'],
            ["color", "background-color", 'rgba(48,120,241,0.80)'],
            ["style", "height", '133px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '267px'],
            ["style", "width", '190px']
         ],
         "${_option1-4-masque}": [
            ["style", "top", '-105px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '130px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '298px'],
            ["style", "width", '640px']
         ],
         "${_btn}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_option1-4-fond1}": [
            ["style", "top", '-149px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '-320px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid20", tween: [ "style", "${_Ellipse}", "top", '-237px', { fromValue: '-133px'}], position: 1000, duration: 1000, easing: "easeInQuad" },
            { id: "eid17", tween: [ "style", "${_Ellipse}", "height", '530px', { fromValue: '133px'}], position: 1000, duration: 1000, easing: "easeInQuad" },
            { id: "eid23", tween: [ "style", "${_option1-4-masque}", "opacity", '0.7', { fromValue: '0.000000'}], position: 2000, duration: 500, easing: "easeInQuad" },
            { id: "eid4", tween: [ "transform", "${_Ellipse}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "transform", "${_Ellipse}", "scaleY", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid43", tween: [ "style", "${_option1-4-fond1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid19", tween: [ "style", "${_Ellipse}", "left", '89px', { fromValue: '267px'}], position: 1000, duration: 1000, easing: "easeInQuad" },
            { id: "eid5", tween: [ "transform", "${_Ellipse}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "transform", "${_Ellipse}", "scaleX", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid26", tween: [ "style", "${_option1-4-legende}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 500, easing: "easeInQuad" },
            { id: "eid18", tween: [ "style", "${_Ellipse}", "width", '719px', { fromValue: '190px'}], position: 1000, duration: 1000, easing: "easeInQuad" },
            { id: "eid35", tween: [ "style", "${_btn}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "style", "${_btn}", "display", 'block', { fromValue: 'none'}], position: 2920, duration: 0, easing: "easeOutQuad" },
            { id: "eid38", tween: [ "style", "${_btn}", "opacity", '1', { fromValue: '0'}], position: 2920, duration: 580, easing: "easeOutQuad" },
            { id: "eid28", tween: [ "style", "${_option1-4-masque}", "top", '-105px', { fromValue: '-105px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid44", tween: [ "style", "${_option1-4-fond2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuad" }         ]
      }
   }
},
"btn": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      boxShadow: ['',-1,1,3,0,'rgba(0,0,0,0.65)'],
      rect: ['0px','0px','116px','25px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      type: 'rect',
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(55,104,187,1.00)']
   },
   {
      rect: ['30px','1px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'Rejouer',
      font: ['Trebuchet MS, Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(55,104,187,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '116px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "cursor", 'pointer'],
            ["subproperty", "boxShadow.blur", '3px'],
            ["style", "height", '25px'],
            ["subproperty", "boxShadow.offsetV", '1px'],
            ["subproperty", "boxShadow.offsetH", '-1px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text}": [
            ["style", "top", '1px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '30px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '116px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "option4-garniture");
