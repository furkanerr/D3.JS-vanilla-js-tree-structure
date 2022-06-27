
const svg = d3.select('svg');
const width = document.body.clientWidth;
const height = document.body.clientHeight;
const tree = d3.tree().size([2200, 2200]);

svg.attr('width', 2200).attr('height', 2200);
    

fetch('../data/data.json' )
.then(res => res.json())
.then(data => {
    const root = d3.hierarchy(data);
    const links = tree(root).links();
    const linkPathsGenerator = d3.linkHorizontal()
    .x(d=>d.y)
    .y(d=>d.x);

    svg.selectAll('path').data(links)
    .enter().append('path')
    .attr('d',linkPathsGenerator)
    
    const nodes = tree(root).descendants();
    svg.selectAll('circle').data(nodes)
    .enter().append('circle')
    .attr('cx', d => d.y)
    .attr('cy', d => d.x)
    .attr('r', 5)
    .attr('fill', d => d.children ? '#fff' : '#000')
    .attr('stroke', d => d.children ? '#000' : '#fff')
    .attr('stroke-width', d => d.children ? 1 : 3)
    .on('click', d => {
        console.log(d);
    }
    );
   svg.selectAll('text').data(nodes)
    .enter().append('text')
    .attr('x', d => d.y)
    .attr('y', d => d.x)
    .attr('text-anchor', 'start')
    .attr('fill', '#000')
    .attr('font-size', '12px')
    .text(d => d.data.name);

    
}
);






    
    



