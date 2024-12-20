"use client"

import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]); 
  const [commentInput, setCommentInput] = useState<string>(""); 
  const handleCommentSubmit = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput]); 
      setCommentInput(""); 
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Leave a Comment</h2>

   
      <div className="space-y-3">
        {comments.length ? (
          comments.map((comment, idx) => (
            <div
              key={idx}
              className="p-3 bg-white border border-gray-200 rounded shadow-sm"
            >
              {comment}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
        )}
      </div>


      <div className="mt-6">
        <textarea
          placeholder="Write your comment here..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-400"
        />
        <button
          onClick={handleCommentSubmit}
          disabled={!commentInput.trim()}
          className="mt-3 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-300 disabled:opacity-50"
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
