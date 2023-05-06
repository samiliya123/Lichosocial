import { MoreVert } from '@material-ui/icons'
import  './post.css'
import { Users } from '../../dummyData'
import { useState } from 'react'

export default function Post({post}) {
    const [like, isLike] = useState(post.like)
    const [setLiked, setIsLiked] = useState(false)

     const likeHandler = () => {
        isLike(setLiked ? like-1 : like+1)
         setIsLiked(!setLiked)
     }
    return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img  src= {Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                <span className='postUsername'>{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
              </div>
              <div className="postTopRight">
              <MoreVert />
              </div>
            </div>
            <div className="postCenter">
              <span className="postText"> {post?.desc}</span>
              <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
            <div className="postBottomLeft">
              <img src="/asset/like.png" alt="" className="likeIcon"  onClick={likeHandler}/>
              <img src="/asset/heart.png" alt="" className="likeIcon"  onClick={likeHandler}/>
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="PostCommentText">{post.comment} comments</span>
            </div>
               
            </div>
        </div>
    </div>
  )
}
