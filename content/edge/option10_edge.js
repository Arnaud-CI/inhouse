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
            id:'option10-pompe',
            type:'image',
            rect:['0px','0px','717px','425px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"option10-pompe.png",'0px','0px']
         },
         {
            id:'option10-cache',
            type:'image',
            rect:['0px','0px','717px','425px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"option10-cache.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_option10-pompe}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_option10-cache}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '717px'],
            ["style", "height", '425px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid2", tween: [ "style", "${_option10-cache}", "opacity", '1', { fromValue: '0.000000'}], position: 2500, duration: 500, easing: "easeInOutCubic" },
            { id: "eid4", tween: [ "style", "${_option10-cache}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500, easing: "easeInOutCubic" }         ]
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
})(jQuery, AdobeEdge, "option10");
