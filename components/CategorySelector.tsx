import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '@/store/index'
import CategoryInputField from './CategoryInputField';

export default function CategorySelector() {
    const dispatch = useDispatch();
    const { category } = useSelector((state: any) => state.preferences.category);

    const categories = ["Technology", "Finance", "Health", "Sports"];

    return (
        <div className="p-4 flex gap-3 items-center">
        <label className="block text-lg font-bold">Select Category:</label>
        <select
          className="p-2 border rounded text-black"
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <CategoryInputField />
      </div>
    )
}