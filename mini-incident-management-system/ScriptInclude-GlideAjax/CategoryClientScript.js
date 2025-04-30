function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    var ga = new GlideAjax('CategoryHelper');
    ga.addParam('sysparm_name', 'getDefaultDescription');
    ga.addParam('sysparm_category', newValue);

    ga.getXMLAnswer(function(response) {
         var answer = response;
         if (answer) {
             g_form.setValue('u_description', answer);
         } else {
             g_form.setValue('u_description', '');
        }
   });
}

