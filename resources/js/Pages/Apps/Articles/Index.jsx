import React, { useState, useEffect } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Head, Link, router } from '@inertiajs/react';
import { IconEdit, IconTrash, IconFileDescription } from '@tabler/icons-react';
import hasAnyPermission from '@/Utils/Permissions';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export default function Index({ articles, flash }) {
    useEffect(() => {
        if (flash && flash.success) {
            toast.success(flash.success);
        }
    }, [flash]);

    const handleEdit = (slug) => {
        Swal.fire({
            title: 'Edit Artikel',
            text: 'Anda akan mengedit artikel ini',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, edit!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                const loadingToast = toast.loading('Membuka form edit...');
                router.get(`/apps/articles/${slug}/edit`, {}, {
                    onSuccess: () => {
                        toast.dismiss(loadingToast);
                    },
                    onError: () => {
                        toast.dismiss(loadingToast);
                        toast.error('Gagal membuka form edit!');
                    }
                });
            }
        });
    };

    const handleDelete = (slug) => {
        Swal.fire({
            title: 'Hapus Artikel',
            text: "Artikel yang dihapus tidak dapat dikembalikan!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
<<<<<<< HEAD
            if (result.isConfirmed) {
                const loadingToast = toast.loading('Menghapus artikel...');
                router.delete(`/apps/articles/${slug}`, {
                    onSuccess: () => {
                        toast.dismiss(loadingToast);
                        toast.success('Artikel berhasil dihapus!');
                    },
                    onError: () => {
                        toast.dismiss(loadingToast);
                        toast.error('Gagal menghapus artikel!');
                    }
=======
            if (result.isConfirmed) {-
                router.delete(`/apps/articles/${id}`);
                Swal.fire({
                    title: 'Berhasil!',
                    text: 'Data artikel berhasil dihapus.',
                    icon: 'success',
                    timer: 1000,
                    showConfirmButton: false,
>>>>>>> efef0a33c9f28b4ee3c8fb0c6a0ff3615ca50151
                });
            }
        });
    };

    return (
        <>
            <Head title="Katalog Artikel" />
<<<<<<< HEAD
            <Toaster position="top-right" />
=======
>>>>>>> efef0a33c9f28b4ee3c8fb0c6a0ff3615ca50151

            <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Katalog Artikel</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Kelola artikel dengan mudah</p>
                </div>
                {hasAnyPermission(['articles-create']) && (
                    <Link
                        href="/apps/articles/create"
<<<<<<< HEAD
                        className="bg-[#AA51DF] text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
=======
                        className="bg-[#AA51DF] text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
>>>>>>> efef0a33c9f28b4ee3c8fb0c6a0ff3615ca50151
                    >
                        Tambah Artikel
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(Array.isArray(articles) ? articles : []).map((article) => (
                    <div key={article.id} className="relative">
<<<<<<< HEAD
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 flex flex-col border-2 border-[#D4A8EF] dark:border-gray-900 shadow-sm">
=======
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 flex flex-col border border-[#D4A8EF] dark:border-gray-900 shadow-sm">
>>>>>>> efef0a33c9f28b4ee3c8fb0c6a0ff3615ca50151
                            <div className="mb-4 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-gray-800 h-[200px]">
                                {article.thumbnail ? (
                                    <img
                                        src={article.thumbnail.startsWith('http') 
                                            ? article.thumbnail 
                                            : `/storage/${article.thumbnail}`
                                        }
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <IconFileDescription size={48} className="text-gray-400" />
                                    </div>
                                )}
                            </div>
                            
                            <h3 className="font-semibold text-lg mb-2 text-left text-gray-900 dark:text-white">
                                {article.title}
                            </h3>
                            
                            <span className="block text-sm text-gray-800 dark:text-gray-400 mb-2">
                                {article.author}
                            </span>
                            
                            <div className="flex justify-between items-center">
                                <Link
<<<<<<< HEAD
                                    href={`/apps/articles/${article.slug}`}
=======
                                    href={`/apps/articles/${article.id}`}
>>>>>>> efef0a33c9f28b4ee3c8fb0c6a0ff3615ca50151
                                    className="text-indigo-600 dark:text-indigo-400 text-sm underline"
                                >
                                    Baca Selengkapnya
                                </Link>
                                
                                <div className="flex gap-1">
                                    {hasAnyPermission(['articles-delete']) && (
                                        <button
<<<<<<< HEAD
                                            onClick={() => handleDelete(article.slug)}
                                            className="text-red-900 p-2 rounded-full hover:bg-red-200 transition transform hover:scale-110"
                                        >
                                        <img 
                                            src="/images/delete.svg" 
                                            alt="Delete Icon" 
                                            className="w-[26] h-[26px]"
                                        />
                                        </button>
                                    )}
                                    {hasAnyPermission(['articles-update']) && (
                                        <button
                                            onClick={() => handleEdit(article.slug)}
                                            className="text-gray-700 p-2 rounded-full hover:bg-gray-400 transition transform hover:scale-110"
                                        >
                                        <img 
                                        src="/images/edit.svg" 
                                        alt="Edit Icon" 
                                        className="w-[26px] h-[26px]"
                                        />
                                        </button>
=======
                                            onClick={() => handleDelete(article.id)}
                                            className="text-red-900 p-2 rounded-full hover:bg-red-200 transition transform hover:scale-110"
                                        >
                                            <IconTrash size={20} />
                                        </button>
                                    )}
                                    {hasAnyPermission(['articles-update']) && (
                                        <Link
                                            href={`/apps/articles/${article.id}/edit`}
                                            className="text-gray-700 p-2 rounded-full hover:bg-gray-400 transition transform hover:scale-110"
                                        >
                                            <IconEdit size={20} />
                                        </Link>
>>>>>>> efef0a33c9f28b4ee3c8fb0c6a0ff3615ca50151
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

Index.layout = page => <AppLayout children={page} />