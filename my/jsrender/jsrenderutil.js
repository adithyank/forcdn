var sirpi = sirpi || {}
sirpi.jsrender = sirpi.jsrender || {}

sirpi.jsrender.getContent = function(templatePath, data)
{
    //console.log("templatePath = ", templatePath)

    let templateName = templatePath.replace(/-|\/|\./g, '_')
    //console.log("templateName = ", templateName)

    if (!$.render[templateName])
    {
        let templateStr = content(templatePath)
        //console.log("templateStr = ", templateStr)
        $.templates(templateName, templateStr)
    }

    return $.render[templateName](data)
}

//encodedTemplatePath : testtemplate
sirpi.jsrender.loadContent = function(divId, templatePath, data)
{
    $('#' + divId).html(sirpi.jsrender.getContent(templatePath, data))
}

function content(url)
{
    var content

    console.log("giving network call to get template...")
    $.ajax({
        mimeType: 'text/html; charset=utf-8',
        url: url,
        type: 'GET',
        success: function(data) {
            content = data
        },
        async: false
    });

    return content
}
