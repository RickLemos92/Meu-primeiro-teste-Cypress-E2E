describe('Api Adopet', () =>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZjlhMDZkMC1hYzdkLTQ4NTktYjAwZi1hMWU3NmY2YzE2MTAiLCJhZG9wdGVyTmFtZSI6Ik1hdGhldXMgTGVtb3MiLCJpYXQiOjE3MTczMzgzNjEsImV4cCI6MTcxNzU5NzU2MX0.BhwMhHxuVERPuDHQardeOAFjRSyITjWkOQ-kCChupjk` 
    
 
 it('Mensagem da APi', () =>{
 cy.request({
        method: 'GET'  ,
        url: 'https://adopet-api-i8qu.onrender.com/mensagem/9f9a06d0-ac7d-4859-b00f-a1e76f6c1610', 
        headers: {authorization}
    }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('msg')
    })
 })
})
