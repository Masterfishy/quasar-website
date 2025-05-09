import supabase from "./supabase";
import localbase from "./localbase";

export async function fetchPostPreviews()
{
    localbase.localFetchPostPreviews();

    let { data: post_previews, error } = await supabase
        .from('post_previews')
        .select('*');

    if (error)
    {
        throw new Error(error.message);
    }

  return post_previews;
}

export async function fetchPost(postId)
{
    let { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', postId);

    if (error)
    {
        throw new Error(error.message);
    }

    return post
}
