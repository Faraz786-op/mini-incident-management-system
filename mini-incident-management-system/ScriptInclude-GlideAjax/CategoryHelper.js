var CategoryHelper = Class.create();
CategoryHelper.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getDefaultDescription: function() {
        var category = this.getParameter('sysparm_category');
        if (!category) return '';

        category = category.toLowerCase().trim(); // Normalize input

        if (category == 'network') {
            return 'Please check your network connection and try again.';
        } else if (category == 'software') {
            return 'The software is experiencing issues.';
        } else if (category == 'hardware') {
            return 'Hardware needs to be checked.';
        } else {
            return 'General incident description.';
        }
    }

});

