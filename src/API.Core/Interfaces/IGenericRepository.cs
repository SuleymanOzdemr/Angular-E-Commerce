using API.Core.DbModels;
using API.Core.Specifications;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace API.Core.Interfaces
{
   public interface IGenericRepository<T> where T: BaseEntity
    {
        Task<T> GetByIdAsync(int id);
        Task<IReadOnlyList<T>> ListAllAsync();
        Task<T> GetEntityWithSpec(ISpecifications<T> spec);
        Task<IReadOnlyList<T>> ListAsync(ISpecifications<T> spec);

        Task<int> CountAsync(ISpecifications<T> spec);
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        Task GetByIdAsync(object id);
    }
}
