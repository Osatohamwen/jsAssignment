
document.addEventListener('DOMContentLoaded', function () {
    const tagInput = document.getElementById('tag-input');
    const tagsList = document.getElementById('tags-list');
    const count = document.getElementById('count-tag');
    tags = 0 + 1;
    tagsReduce = tags;

      

    tagInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const tagValue = tagInput.value.trim();
            if (tagValue) {
                addTag(tagValue);
                tagInput.value = '';
            }
        }
    });

    function addTag(tagValue) {
        const tagItem = document.createElement('li');
        tagItem.innerHTML = `
            <span>${tagValue}</span>
            <button type="button">&times;</button>
        `
        count.innerText = tags++;
        ;

        tagItem.querySelector('button').addEventListener('click', function () {
            tagsList.removeChild(tagItem);
            count.innerText = tagsReduce--;
        });

        tagsList.appendChild(tagItem);
    }
    


















});
