"""Inital migrations

Revision ID: 458483bf9d97
Revises: 
Create Date: 2024-07-31 07:31:09.069987

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '458483bf9d97'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=80), nullable=False),
    sa.Column('password', sa.String(length=200), nullable=False),
    sa.Column('display_name', sa.String(length=80), nullable=False),
    sa.Column('avatar', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('user_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    # ### end Alembic commands ###
