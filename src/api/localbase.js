
const localbase = class LocalBase
{
    async localFetchPostPreviews()
    {
        const response = await fetch("assets/posts.json");
        const json = await response.json();

        let post_previews = [];
        json.posts.forEach((post) => post_previews.push(post.preview));

        console.log(`ZACH! ${post_previews}`);

        return post_previews;
    }
}

export default localbase;
