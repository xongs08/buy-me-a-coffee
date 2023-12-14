export default function createElement(elementName, attributes) {
    const element = document.createElement(elementName);
    const attributesAsArray = Object.entries(attributes);

    attributesAsArray.forEach(([key, value]) => element.setAttributes(key, value));

    return element;
}
