import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '@/store/index'
import { Search } from 'lucide-react';

export default function CategoryInputField() {
    const dispatch = useDispatch();
    const [cat, setCat] = useState("");
    const { category } = useSelector((state: any) => state.preferences.category);
    return (
        <div className="flex items-center gap-2">
        <input
            type='text'
          className="p-2 border rounded text-black"
          value={category}
          placeholder='Category'
          onChange={(e) => setCat(e.target.value || "Technology")}
        />
        <Search onClick={() => dispatch(setCategory(cat))}/>
      </div>
    )
}