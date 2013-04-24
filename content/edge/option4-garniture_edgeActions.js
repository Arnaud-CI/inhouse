/***********************
* Actions de compositions pour Adobe Edge Animate
*
* Modifier ce fichier avec précaution, en veillant à conserver 
* les signatures et les commentaires de fonction commençant par « Edge » pour maintenir la 
* possibilité d’interagir avec ces actions depuis Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // alias pour les classes Edge couramment utilisées

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insérer ici le code à exécuter lors de la création du symbole
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn}", "click", function(sym, e) {
         // insérer le code du clic de souris ici
         // lire le scénario à partir de la position spécifiée (ms ou étiquette)
         sym.play(500);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn'
   (function(symbolName) {   
   
   })("btn");
   //Edge symbol end:'btn'

})(jQuery, AdobeEdge, "option4-garniture");