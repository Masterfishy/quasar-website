import supabase from "./supabase";

export async function fetchPostPreviews()
{
    let { data: post_previews, error } = await supabase
        .from('post_previews')
        .select('*')
        .single();

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
        .eq('id', postId)
        .single();

    if (error)
    {
        throw new Error(error.message);
    }

    return post
}
