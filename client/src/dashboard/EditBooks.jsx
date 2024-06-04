import React, { useState } from 'react';
import { Label, TextInput, Button } from "flowbite-react";
import { Select } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom'

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageUrl, bookDescription, bookPDFURL} = useLoaderData();
  
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Biography",
    "Business",
    "Cooking",
    "History",
    "Politics",
    "Religion",
    "Science",
    "Technology",
    "Travel",
    "Other",
    "Arts",
    "Education",
    "Sports",
    "Health",
    "Kids",
    "Religious",
    "Romance",
    "Thriller",
    "Mystery",
    "Science Fiction",
    "Horror",
    "Young Adult",
    "Young Adult Fiction",
    "Young Adult Non-Fiction",
    "Young Adult Romance",
    "Programming",
    "Memoir",
    "Travel",
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories);

  const handleChangeSelectedValues = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  // handling book Update
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(event.target);

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPDFURL
    }
    //console.log(bookObj);

    //update the book data
    fetch(`http://localhost:3000/book/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateBookObj)
    })
    .then(res => res.json())
    .then(data => {
    //console.log(data)
    alert("Book is updated successfully!!")
    form.reset();
    })
  }


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book Data</h2>
      
      <form onSubmit={handleUpdate} className="flex lg:w-[1020px] flex-col flex-wrap gap-4">
        {/* first Row */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label 
              htmlFor="bookTitle" 
              value="Book Title" 
            />
          </div>
          <TextInput 
            id="bookTitle" 
            name="bookTitle" 
            placeholder="Book Name" 
            required
            type="text"
            defaultValue={bookTitle}
          />
        </div>

        {/* author Name */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label 
              htmlFor="authorName" 
              value="Author Name" 
            />
          </div>
          <TextInput 
            id="authorName"
            name="authorName"
            placeholder="Author Name" 
            required
            type="text"
            defaultValue={authorName}
          />
        </div>
      </div>
      
      {/* second row */}
      {/* Book image */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label 
              htmlFor="imageUrl" 
              value="Book URL" 
            />
          </div>
          <TextInput 
            id="imageUrl" 
            name="imageUrl" 
            placeholder="Book image URL" 
            required
            type="text"
            defaultValue={imageUrl}
          />
        </div>

        {/* category Name */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label 
              htmlFor="inputState" 
              value="Book category" 
            />
          </div>
          <Select 
            id="inputState" 
            name="categoryName"
            className="w-full rounded" 
            onChange={handleChangeSelectedValues}
            value={selectedBookCategory}
          >
            {
              bookCategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))
            }
          </Select>
        </div>
      </div>


      {/* Book Description */}
      <div>
        <div className='mb-2 block'>
          <Label 
            htmlFor="bookDescription" 
            value="Book Description" 
          />
        </div>
        <TextInput 
          id="bookDescription"
          name="bookDescription"
          placeholder="Write your book description..."
          required
          row={6}
          className='w-full'
          defaultValue={bookDescription}
        />
      </div>

      {/* Book Pdf link */}
      <div>
        <div className='mb-2 block'>
          <Label 
            htmlFor="bookPDFURL" 
            value="Book PDF URL" 
          />
        </div>
        <TextInput 
          id="bookPDFURL"
          name="bookPDFURL"
          placeholder="Book pdf Url..."
          required
          type="text"
          defaultValue={bookPDFURL}
        />
      </div>

      {/* Upload Button */}
      <Button type="submit" className='mt-5'>
        Update Book
      </Button>

    </form>
    </div>
  )
}

export default EditBooks