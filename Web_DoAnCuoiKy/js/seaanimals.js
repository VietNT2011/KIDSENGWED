$(document).ready(function(){
   
    $('.seaanimals_item').click(function() {
       
        var seaanimalsname = $(this).attr('alt');
      
        responsiveVoice.speak(seaanimalsname, "UK English Male");
    });
});
$(document).ready(function() {
    $('.seaanimals_item').click(function() {
     
      var seaanimalsname = $(this).attr('alt');
     
      var vocabulary = seaanimalsVocabularies[seaanimalsname];
    
      var vietnameseVocab = vocabulary['vi'];
 
      var tooltipContent = seaanimalsname.toUpperCase() + ' : ' + vietnameseVocab;
     
      $(this).attr('title', tooltipContent).tooltip('show');
      
      $('.tooltip').css({'font-size': '16px', 'padding': '10px'});
      $('.tooltip-inner').css({'font-size': '16px', 'padding': '10px'});
    });
  });
 
 var seaanimalsVocabularies = {
    'clam': {'vi': 'con sò'},
    'coral': {'vi': 'san hô'},
    'seahorse': {'vi': 'cá ngựa'},
    'fish': {'vi': 'con cá'},
    'whale': {'vi': 'cá voi'},
    'dolphin': {'vi': 'cá heo'},
    'shrimp': {'vi': 'con tôm'},
    'octopus': {'vi': 'bạch tuộc'},
    'eel': {'vi': 'con lươn'},
    'jellyfish': {'vi': 'con sứa'},
    'starfish': {'vi': 'sao biển'},
    'squid': {'vi': 'con mực'},
    'crab': {'vi': 'con cua'},
    'shark': {'vi': 'cá mập'},
    
    };