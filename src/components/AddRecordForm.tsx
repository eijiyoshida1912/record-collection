import React, { useState } from 'react'
import { addRecord } from '../services/firebase';

const AddRecordForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // フォームのバリデーション
    if (!title || !artist || !genre || !releaseYear) {
      alert("全てのフィールドを入力してください！");
      return;
    }

    // Firebaseにデータを追加
    try {
      await addRecord({
        title,
        artist,
        genre,
        releaseYear: parseInt(releaseYear),
      });
      alert("レコードを追加しました！");
      setTitle("");
      setArtist("");
      setGenre("");
      setReleaseYear("");
    } catch (error) {
      console.error("データの追加に失敗しました", error);
      alert("エラーが発生しました。もう一度試してください！");
    }
  };

  return (
    <div>AddRecordForm</div>
  )
}

export default AddRecordForm