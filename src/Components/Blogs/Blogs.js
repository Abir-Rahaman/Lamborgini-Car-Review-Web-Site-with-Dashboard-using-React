import React from 'react';

const Blogs = () => {
    return (
        <div className='container' >
            <h1> What Is Context API ?</h1>
            <p>
                The React framework's Context API is a component structure that allows the communication of specific types of data across all layers of the application. The React Context API was created to address the issue of prop drilling. However, Context API was also created to address a number of issues with React apps. We can transmit data deeply with React Context API. Context API can be used as a global state management resolution by certain developers, however, doing so is difficult. While React Context is native and straightforward, it is not a dedicated state management tool like Redux, and it lacks logical defaults. The Context API makes it easier for all components to access our global and app-wide data, making it straightforward and more get-at-able. The Context API has been hailed as one of the most important elements of the React framework, as well as a significant improvement in recent iterations
                </p>
            <h1> About semantic </h1>
            <p>The purpose of the HTML element is clearly defined by semantic tags. It also specifies the sort of content that should be included in the element. Header, footer, and article, for example, are called semantic components since they explicitly state their objective and the kind of content they should contain. Semantic tags additionally enable search engines to effectively parse the webpage as well as locate accurate information. As a result, search engines will be able to properly index the page. In other words, by including semantic HTML tags on web pages, we actually give Google and Bing additional information about the functions and relative significance of the various elements on your website. Despite the fact that practically every HTML4 and HTML5 tag has semantic implications, certain tags are primarily semantic.Here are several instances of semantic tags: 
                <br /> 
    <br />
	1:header
    <br />

	2:nav
    <br />
	3:article
    <br />
	4:section
    <br />
	5:aside
    <br />
	6:footer
</p>
        </div>
    );
};

export default Blogs;